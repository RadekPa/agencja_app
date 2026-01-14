import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { tblTitAuthorsScalarWhereInputObjectSchema as tblTitAuthorsScalarWhereInputObjectSchema } from './tblTitAuthorsScalarWhereInput.schema';
import { tblTitAuthorsUpdateManyMutationInputObjectSchema as tblTitAuthorsUpdateManyMutationInputObjectSchema } from './tblTitAuthorsUpdateManyMutationInput.schema';
import { tblTitAuthorsUncheckedUpdateManyWithoutTblTitlesInputObjectSchema as tblTitAuthorsUncheckedUpdateManyWithoutTblTitlesInputObjectSchema } from './tblTitAuthorsUncheckedUpdateManyWithoutTblTitlesInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => tblTitAuthorsScalarWhereInputObjectSchema),
  data: z.union([z.lazy(() => tblTitAuthorsUpdateManyMutationInputObjectSchema), z.lazy(() => tblTitAuthorsUncheckedUpdateManyWithoutTblTitlesInputObjectSchema)])
}).strict();
export const tblTitAuthorsUpdateManyWithWhereWithoutTblTitlesInputObjectSchema: z.ZodType<Prisma.tblTitAuthorsUpdateManyWithWhereWithoutTblTitlesInput> = makeSchema() as unknown as z.ZodType<Prisma.tblTitAuthorsUpdateManyWithWhereWithoutTblTitlesInput>;
export const tblTitAuthorsUpdateManyWithWhereWithoutTblTitlesInputObjectZodSchema = makeSchema();
