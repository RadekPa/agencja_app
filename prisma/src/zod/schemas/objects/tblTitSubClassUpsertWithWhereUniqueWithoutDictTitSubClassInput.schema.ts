import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { tblTitSubClassWhereUniqueInputObjectSchema as tblTitSubClassWhereUniqueInputObjectSchema } from './tblTitSubClassWhereUniqueInput.schema';
import { tblTitSubClassUpdateWithoutDictTitSubClassInputObjectSchema as tblTitSubClassUpdateWithoutDictTitSubClassInputObjectSchema } from './tblTitSubClassUpdateWithoutDictTitSubClassInput.schema';
import { tblTitSubClassUncheckedUpdateWithoutDictTitSubClassInputObjectSchema as tblTitSubClassUncheckedUpdateWithoutDictTitSubClassInputObjectSchema } from './tblTitSubClassUncheckedUpdateWithoutDictTitSubClassInput.schema';
import { tblTitSubClassCreateWithoutDictTitSubClassInputObjectSchema as tblTitSubClassCreateWithoutDictTitSubClassInputObjectSchema } from './tblTitSubClassCreateWithoutDictTitSubClassInput.schema';
import { tblTitSubClassUncheckedCreateWithoutDictTitSubClassInputObjectSchema as tblTitSubClassUncheckedCreateWithoutDictTitSubClassInputObjectSchema } from './tblTitSubClassUncheckedCreateWithoutDictTitSubClassInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => tblTitSubClassWhereUniqueInputObjectSchema),
  update: z.union([z.lazy(() => tblTitSubClassUpdateWithoutDictTitSubClassInputObjectSchema), z.lazy(() => tblTitSubClassUncheckedUpdateWithoutDictTitSubClassInputObjectSchema)]),
  create: z.union([z.lazy(() => tblTitSubClassCreateWithoutDictTitSubClassInputObjectSchema), z.lazy(() => tblTitSubClassUncheckedCreateWithoutDictTitSubClassInputObjectSchema)])
}).strict();
export const tblTitSubClassUpsertWithWhereUniqueWithoutDictTitSubClassInputObjectSchema: z.ZodType<Prisma.tblTitSubClassUpsertWithWhereUniqueWithoutDictTitSubClassInput> = makeSchema() as unknown as z.ZodType<Prisma.tblTitSubClassUpsertWithWhereUniqueWithoutDictTitSubClassInput>;
export const tblTitSubClassUpsertWithWhereUniqueWithoutDictTitSubClassInputObjectZodSchema = makeSchema();
