import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { tblTitSubClassWhereUniqueInputObjectSchema as tblTitSubClassWhereUniqueInputObjectSchema } from './tblTitSubClassWhereUniqueInput.schema';
import { tblTitSubClassUpdateWithoutDictTitSubClassInputObjectSchema as tblTitSubClassUpdateWithoutDictTitSubClassInputObjectSchema } from './tblTitSubClassUpdateWithoutDictTitSubClassInput.schema';
import { tblTitSubClassUncheckedUpdateWithoutDictTitSubClassInputObjectSchema as tblTitSubClassUncheckedUpdateWithoutDictTitSubClassInputObjectSchema } from './tblTitSubClassUncheckedUpdateWithoutDictTitSubClassInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => tblTitSubClassWhereUniqueInputObjectSchema),
  data: z.union([z.lazy(() => tblTitSubClassUpdateWithoutDictTitSubClassInputObjectSchema), z.lazy(() => tblTitSubClassUncheckedUpdateWithoutDictTitSubClassInputObjectSchema)])
}).strict();
export const tblTitSubClassUpdateWithWhereUniqueWithoutDictTitSubClassInputObjectSchema: z.ZodType<Prisma.tblTitSubClassUpdateWithWhereUniqueWithoutDictTitSubClassInput> = makeSchema() as unknown as z.ZodType<Prisma.tblTitSubClassUpdateWithWhereUniqueWithoutDictTitSubClassInput>;
export const tblTitSubClassUpdateWithWhereUniqueWithoutDictTitSubClassInputObjectZodSchema = makeSchema();
