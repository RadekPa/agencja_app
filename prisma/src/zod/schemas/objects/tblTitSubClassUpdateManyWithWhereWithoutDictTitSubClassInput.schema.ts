import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { tblTitSubClassScalarWhereInputObjectSchema as tblTitSubClassScalarWhereInputObjectSchema } from './tblTitSubClassScalarWhereInput.schema';
import { tblTitSubClassUpdateManyMutationInputObjectSchema as tblTitSubClassUpdateManyMutationInputObjectSchema } from './tblTitSubClassUpdateManyMutationInput.schema';
import { tblTitSubClassUncheckedUpdateManyWithoutDictTitSubClassInputObjectSchema as tblTitSubClassUncheckedUpdateManyWithoutDictTitSubClassInputObjectSchema } from './tblTitSubClassUncheckedUpdateManyWithoutDictTitSubClassInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => tblTitSubClassScalarWhereInputObjectSchema),
  data: z.union([z.lazy(() => tblTitSubClassUpdateManyMutationInputObjectSchema), z.lazy(() => tblTitSubClassUncheckedUpdateManyWithoutDictTitSubClassInputObjectSchema)])
}).strict();
export const tblTitSubClassUpdateManyWithWhereWithoutDictTitSubClassInputObjectSchema: z.ZodType<Prisma.tblTitSubClassUpdateManyWithWhereWithoutDictTitSubClassInput> = makeSchema() as unknown as z.ZodType<Prisma.tblTitSubClassUpdateManyWithWhereWithoutDictTitSubClassInput>;
export const tblTitSubClassUpdateManyWithWhereWithoutDictTitSubClassInputObjectZodSchema = makeSchema();
