import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { dictCoverFormatCreateWithoutTblTitlesInputObjectSchema as dictCoverFormatCreateWithoutTblTitlesInputObjectSchema } from './dictCoverFormatCreateWithoutTblTitlesInput.schema';
import { dictCoverFormatUncheckedCreateWithoutTblTitlesInputObjectSchema as dictCoverFormatUncheckedCreateWithoutTblTitlesInputObjectSchema } from './dictCoverFormatUncheckedCreateWithoutTblTitlesInput.schema';
import { dictCoverFormatCreateOrConnectWithoutTblTitlesInputObjectSchema as dictCoverFormatCreateOrConnectWithoutTblTitlesInputObjectSchema } from './dictCoverFormatCreateOrConnectWithoutTblTitlesInput.schema';
import { dictCoverFormatUpsertWithoutTblTitlesInputObjectSchema as dictCoverFormatUpsertWithoutTblTitlesInputObjectSchema } from './dictCoverFormatUpsertWithoutTblTitlesInput.schema';
import { dictCoverFormatWhereInputObjectSchema as dictCoverFormatWhereInputObjectSchema } from './dictCoverFormatWhereInput.schema';
import { dictCoverFormatWhereUniqueInputObjectSchema as dictCoverFormatWhereUniqueInputObjectSchema } from './dictCoverFormatWhereUniqueInput.schema';
import { dictCoverFormatUpdateToOneWithWhereWithoutTblTitlesInputObjectSchema as dictCoverFormatUpdateToOneWithWhereWithoutTblTitlesInputObjectSchema } from './dictCoverFormatUpdateToOneWithWhereWithoutTblTitlesInput.schema';
import { dictCoverFormatUpdateWithoutTblTitlesInputObjectSchema as dictCoverFormatUpdateWithoutTblTitlesInputObjectSchema } from './dictCoverFormatUpdateWithoutTblTitlesInput.schema';
import { dictCoverFormatUncheckedUpdateWithoutTblTitlesInputObjectSchema as dictCoverFormatUncheckedUpdateWithoutTblTitlesInputObjectSchema } from './dictCoverFormatUncheckedUpdateWithoutTblTitlesInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => dictCoverFormatCreateWithoutTblTitlesInputObjectSchema), z.lazy(() => dictCoverFormatUncheckedCreateWithoutTblTitlesInputObjectSchema)]).optional(),
  connectOrCreate: z.lazy(() => dictCoverFormatCreateOrConnectWithoutTblTitlesInputObjectSchema).optional(),
  upsert: z.lazy(() => dictCoverFormatUpsertWithoutTblTitlesInputObjectSchema).optional(),
  disconnect: z.union([z.boolean(), z.lazy(() => dictCoverFormatWhereInputObjectSchema)]).optional(),
  delete: z.union([z.boolean(), z.lazy(() => dictCoverFormatWhereInputObjectSchema)]).optional(),
  connect: z.lazy(() => dictCoverFormatWhereUniqueInputObjectSchema).optional(),
  update: z.union([z.lazy(() => dictCoverFormatUpdateToOneWithWhereWithoutTblTitlesInputObjectSchema), z.lazy(() => dictCoverFormatUpdateWithoutTblTitlesInputObjectSchema), z.lazy(() => dictCoverFormatUncheckedUpdateWithoutTblTitlesInputObjectSchema)]).optional()
}).strict();
export const dictCoverFormatUpdateOneWithoutTblTitlesNestedInputObjectSchema: z.ZodType<Prisma.dictCoverFormatUpdateOneWithoutTblTitlesNestedInput> = makeSchema() as unknown as z.ZodType<Prisma.dictCoverFormatUpdateOneWithoutTblTitlesNestedInput>;
export const dictCoverFormatUpdateOneWithoutTblTitlesNestedInputObjectZodSchema = makeSchema();
