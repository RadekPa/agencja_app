import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { dictCoverFormatWhereUniqueInputObjectSchema as dictCoverFormatWhereUniqueInputObjectSchema } from './dictCoverFormatWhereUniqueInput.schema';
import { dictCoverFormatCreateWithoutTblTitlesInputObjectSchema as dictCoverFormatCreateWithoutTblTitlesInputObjectSchema } from './dictCoverFormatCreateWithoutTblTitlesInput.schema';
import { dictCoverFormatUncheckedCreateWithoutTblTitlesInputObjectSchema as dictCoverFormatUncheckedCreateWithoutTblTitlesInputObjectSchema } from './dictCoverFormatUncheckedCreateWithoutTblTitlesInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => dictCoverFormatWhereUniqueInputObjectSchema),
  create: z.union([z.lazy(() => dictCoverFormatCreateWithoutTblTitlesInputObjectSchema), z.lazy(() => dictCoverFormatUncheckedCreateWithoutTblTitlesInputObjectSchema)])
}).strict();
export const dictCoverFormatCreateOrConnectWithoutTblTitlesInputObjectSchema: z.ZodType<Prisma.dictCoverFormatCreateOrConnectWithoutTblTitlesInput> = makeSchema() as unknown as z.ZodType<Prisma.dictCoverFormatCreateOrConnectWithoutTblTitlesInput>;
export const dictCoverFormatCreateOrConnectWithoutTblTitlesInputObjectZodSchema = makeSchema();
