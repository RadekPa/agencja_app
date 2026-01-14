import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { dictCoverFormatCreateWithoutTblTitlesInputObjectSchema as dictCoverFormatCreateWithoutTblTitlesInputObjectSchema } from './dictCoverFormatCreateWithoutTblTitlesInput.schema';
import { dictCoverFormatUncheckedCreateWithoutTblTitlesInputObjectSchema as dictCoverFormatUncheckedCreateWithoutTblTitlesInputObjectSchema } from './dictCoverFormatUncheckedCreateWithoutTblTitlesInput.schema';
import { dictCoverFormatCreateOrConnectWithoutTblTitlesInputObjectSchema as dictCoverFormatCreateOrConnectWithoutTblTitlesInputObjectSchema } from './dictCoverFormatCreateOrConnectWithoutTblTitlesInput.schema';
import { dictCoverFormatWhereUniqueInputObjectSchema as dictCoverFormatWhereUniqueInputObjectSchema } from './dictCoverFormatWhereUniqueInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => dictCoverFormatCreateWithoutTblTitlesInputObjectSchema), z.lazy(() => dictCoverFormatUncheckedCreateWithoutTblTitlesInputObjectSchema)]).optional(),
  connectOrCreate: z.lazy(() => dictCoverFormatCreateOrConnectWithoutTblTitlesInputObjectSchema).optional(),
  connect: z.lazy(() => dictCoverFormatWhereUniqueInputObjectSchema).optional()
}).strict();
export const dictCoverFormatCreateNestedOneWithoutTblTitlesInputObjectSchema: z.ZodType<Prisma.dictCoverFormatCreateNestedOneWithoutTblTitlesInput> = makeSchema() as unknown as z.ZodType<Prisma.dictCoverFormatCreateNestedOneWithoutTblTitlesInput>;
export const dictCoverFormatCreateNestedOneWithoutTblTitlesInputObjectZodSchema = makeSchema();
