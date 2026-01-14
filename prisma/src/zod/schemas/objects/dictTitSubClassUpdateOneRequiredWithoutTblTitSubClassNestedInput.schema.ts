import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { dictTitSubClassCreateWithoutTblTitSubClassInputObjectSchema as dictTitSubClassCreateWithoutTblTitSubClassInputObjectSchema } from './dictTitSubClassCreateWithoutTblTitSubClassInput.schema';
import { dictTitSubClassUncheckedCreateWithoutTblTitSubClassInputObjectSchema as dictTitSubClassUncheckedCreateWithoutTblTitSubClassInputObjectSchema } from './dictTitSubClassUncheckedCreateWithoutTblTitSubClassInput.schema';
import { dictTitSubClassCreateOrConnectWithoutTblTitSubClassInputObjectSchema as dictTitSubClassCreateOrConnectWithoutTblTitSubClassInputObjectSchema } from './dictTitSubClassCreateOrConnectWithoutTblTitSubClassInput.schema';
import { dictTitSubClassUpsertWithoutTblTitSubClassInputObjectSchema as dictTitSubClassUpsertWithoutTblTitSubClassInputObjectSchema } from './dictTitSubClassUpsertWithoutTblTitSubClassInput.schema';
import { dictTitSubClassWhereUniqueInputObjectSchema as dictTitSubClassWhereUniqueInputObjectSchema } from './dictTitSubClassWhereUniqueInput.schema';
import { dictTitSubClassUpdateToOneWithWhereWithoutTblTitSubClassInputObjectSchema as dictTitSubClassUpdateToOneWithWhereWithoutTblTitSubClassInputObjectSchema } from './dictTitSubClassUpdateToOneWithWhereWithoutTblTitSubClassInput.schema';
import { dictTitSubClassUpdateWithoutTblTitSubClassInputObjectSchema as dictTitSubClassUpdateWithoutTblTitSubClassInputObjectSchema } from './dictTitSubClassUpdateWithoutTblTitSubClassInput.schema';
import { dictTitSubClassUncheckedUpdateWithoutTblTitSubClassInputObjectSchema as dictTitSubClassUncheckedUpdateWithoutTblTitSubClassInputObjectSchema } from './dictTitSubClassUncheckedUpdateWithoutTblTitSubClassInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => dictTitSubClassCreateWithoutTblTitSubClassInputObjectSchema), z.lazy(() => dictTitSubClassUncheckedCreateWithoutTblTitSubClassInputObjectSchema)]).optional(),
  connectOrCreate: z.lazy(() => dictTitSubClassCreateOrConnectWithoutTblTitSubClassInputObjectSchema).optional(),
  upsert: z.lazy(() => dictTitSubClassUpsertWithoutTblTitSubClassInputObjectSchema).optional(),
  connect: z.lazy(() => dictTitSubClassWhereUniqueInputObjectSchema).optional(),
  update: z.union([z.lazy(() => dictTitSubClassUpdateToOneWithWhereWithoutTblTitSubClassInputObjectSchema), z.lazy(() => dictTitSubClassUpdateWithoutTblTitSubClassInputObjectSchema), z.lazy(() => dictTitSubClassUncheckedUpdateWithoutTblTitSubClassInputObjectSchema)]).optional()
}).strict();
export const dictTitSubClassUpdateOneRequiredWithoutTblTitSubClassNestedInputObjectSchema: z.ZodType<Prisma.dictTitSubClassUpdateOneRequiredWithoutTblTitSubClassNestedInput> = makeSchema() as unknown as z.ZodType<Prisma.dictTitSubClassUpdateOneRequiredWithoutTblTitSubClassNestedInput>;
export const dictTitSubClassUpdateOneRequiredWithoutTblTitSubClassNestedInputObjectZodSchema = makeSchema();
