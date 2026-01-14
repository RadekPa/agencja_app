import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { tblTitAuthorsScalarWhereInputObjectSchema as tblTitAuthorsScalarWhereInputObjectSchema } from './tblTitAuthorsScalarWhereInput.schema';
import { tblTitAuthorsUpdateManyMutationInputObjectSchema as tblTitAuthorsUpdateManyMutationInputObjectSchema } from './tblTitAuthorsUpdateManyMutationInput.schema';
import { tblTitAuthorsUncheckedUpdateManyWithoutTblAuthorsInputObjectSchema as tblTitAuthorsUncheckedUpdateManyWithoutTblAuthorsInputObjectSchema } from './tblTitAuthorsUncheckedUpdateManyWithoutTblAuthorsInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => tblTitAuthorsScalarWhereInputObjectSchema),
  data: z.union([z.lazy(() => tblTitAuthorsUpdateManyMutationInputObjectSchema), z.lazy(() => tblTitAuthorsUncheckedUpdateManyWithoutTblAuthorsInputObjectSchema)])
}).strict();
export const tblTitAuthorsUpdateManyWithWhereWithoutTblAuthorsInputObjectSchema: z.ZodType<Prisma.tblTitAuthorsUpdateManyWithWhereWithoutTblAuthorsInput> = makeSchema() as unknown as z.ZodType<Prisma.tblTitAuthorsUpdateManyWithWhereWithoutTblAuthorsInput>;
export const tblTitAuthorsUpdateManyWithWhereWithoutTblAuthorsInputObjectZodSchema = makeSchema();
