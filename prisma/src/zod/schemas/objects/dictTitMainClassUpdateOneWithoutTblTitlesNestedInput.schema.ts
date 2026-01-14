import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { dictTitMainClassCreateWithoutTblTitlesInputObjectSchema as dictTitMainClassCreateWithoutTblTitlesInputObjectSchema } from './dictTitMainClassCreateWithoutTblTitlesInput.schema';
import { dictTitMainClassUncheckedCreateWithoutTblTitlesInputObjectSchema as dictTitMainClassUncheckedCreateWithoutTblTitlesInputObjectSchema } from './dictTitMainClassUncheckedCreateWithoutTblTitlesInput.schema';
import { dictTitMainClassCreateOrConnectWithoutTblTitlesInputObjectSchema as dictTitMainClassCreateOrConnectWithoutTblTitlesInputObjectSchema } from './dictTitMainClassCreateOrConnectWithoutTblTitlesInput.schema';
import { dictTitMainClassUpsertWithoutTblTitlesInputObjectSchema as dictTitMainClassUpsertWithoutTblTitlesInputObjectSchema } from './dictTitMainClassUpsertWithoutTblTitlesInput.schema';
import { dictTitMainClassWhereInputObjectSchema as dictTitMainClassWhereInputObjectSchema } from './dictTitMainClassWhereInput.schema';
import { dictTitMainClassWhereUniqueInputObjectSchema as dictTitMainClassWhereUniqueInputObjectSchema } from './dictTitMainClassWhereUniqueInput.schema';
import { dictTitMainClassUpdateToOneWithWhereWithoutTblTitlesInputObjectSchema as dictTitMainClassUpdateToOneWithWhereWithoutTblTitlesInputObjectSchema } from './dictTitMainClassUpdateToOneWithWhereWithoutTblTitlesInput.schema';
import { dictTitMainClassUpdateWithoutTblTitlesInputObjectSchema as dictTitMainClassUpdateWithoutTblTitlesInputObjectSchema } from './dictTitMainClassUpdateWithoutTblTitlesInput.schema';
import { dictTitMainClassUncheckedUpdateWithoutTblTitlesInputObjectSchema as dictTitMainClassUncheckedUpdateWithoutTblTitlesInputObjectSchema } from './dictTitMainClassUncheckedUpdateWithoutTblTitlesInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => dictTitMainClassCreateWithoutTblTitlesInputObjectSchema), z.lazy(() => dictTitMainClassUncheckedCreateWithoutTblTitlesInputObjectSchema)]).optional(),
  connectOrCreate: z.lazy(() => dictTitMainClassCreateOrConnectWithoutTblTitlesInputObjectSchema).optional(),
  upsert: z.lazy(() => dictTitMainClassUpsertWithoutTblTitlesInputObjectSchema).optional(),
  disconnect: z.union([z.boolean(), z.lazy(() => dictTitMainClassWhereInputObjectSchema)]).optional(),
  delete: z.union([z.boolean(), z.lazy(() => dictTitMainClassWhereInputObjectSchema)]).optional(),
  connect: z.lazy(() => dictTitMainClassWhereUniqueInputObjectSchema).optional(),
  update: z.union([z.lazy(() => dictTitMainClassUpdateToOneWithWhereWithoutTblTitlesInputObjectSchema), z.lazy(() => dictTitMainClassUpdateWithoutTblTitlesInputObjectSchema), z.lazy(() => dictTitMainClassUncheckedUpdateWithoutTblTitlesInputObjectSchema)]).optional()
}).strict();
export const dictTitMainClassUpdateOneWithoutTblTitlesNestedInputObjectSchema: z.ZodType<Prisma.dictTitMainClassUpdateOneWithoutTblTitlesNestedInput> = makeSchema() as unknown as z.ZodType<Prisma.dictTitMainClassUpdateOneWithoutTblTitlesNestedInput>;
export const dictTitMainClassUpdateOneWithoutTblTitlesNestedInputObjectZodSchema = makeSchema();
