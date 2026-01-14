import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { dictLanguagesWhereUniqueInputObjectSchema as dictLanguagesWhereUniqueInputObjectSchema } from './dictLanguagesWhereUniqueInput.schema';
import { dictLanguagesCreateWithoutDictArticlesInputObjectSchema as dictLanguagesCreateWithoutDictArticlesInputObjectSchema } from './dictLanguagesCreateWithoutDictArticlesInput.schema';
import { dictLanguagesUncheckedCreateWithoutDictArticlesInputObjectSchema as dictLanguagesUncheckedCreateWithoutDictArticlesInputObjectSchema } from './dictLanguagesUncheckedCreateWithoutDictArticlesInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => dictLanguagesWhereUniqueInputObjectSchema),
  create: z.union([z.lazy(() => dictLanguagesCreateWithoutDictArticlesInputObjectSchema), z.lazy(() => dictLanguagesUncheckedCreateWithoutDictArticlesInputObjectSchema)])
}).strict();
export const dictLanguagesCreateOrConnectWithoutDictArticlesInputObjectSchema: z.ZodType<Prisma.dictLanguagesCreateOrConnectWithoutDictArticlesInput> = makeSchema() as unknown as z.ZodType<Prisma.dictLanguagesCreateOrConnectWithoutDictArticlesInput>;
export const dictLanguagesCreateOrConnectWithoutDictArticlesInputObjectZodSchema = makeSchema();
