import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { tblTitSubClassScalarWhereInputObjectSchema as tblTitSubClassScalarWhereInputObjectSchema } from './tblTitSubClassScalarWhereInput.schema';
import { tblTitSubClassUpdateManyMutationInputObjectSchema as tblTitSubClassUpdateManyMutationInputObjectSchema } from './tblTitSubClassUpdateManyMutationInput.schema';
import { tblTitSubClassUncheckedUpdateManyWithoutTblTitlesInputObjectSchema as tblTitSubClassUncheckedUpdateManyWithoutTblTitlesInputObjectSchema } from './tblTitSubClassUncheckedUpdateManyWithoutTblTitlesInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => tblTitSubClassScalarWhereInputObjectSchema),
  data: z.union([z.lazy(() => tblTitSubClassUpdateManyMutationInputObjectSchema), z.lazy(() => tblTitSubClassUncheckedUpdateManyWithoutTblTitlesInputObjectSchema)])
}).strict();
export const tblTitSubClassUpdateManyWithWhereWithoutTblTitlesInputObjectSchema: z.ZodType<Prisma.tblTitSubClassUpdateManyWithWhereWithoutTblTitlesInput> = makeSchema() as unknown as z.ZodType<Prisma.tblTitSubClassUpdateManyWithWhereWithoutTblTitlesInput>;
export const tblTitSubClassUpdateManyWithWhereWithoutTblTitlesInputObjectZodSchema = makeSchema();
